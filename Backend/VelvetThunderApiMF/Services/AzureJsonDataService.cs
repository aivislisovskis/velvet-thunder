using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

//using Microsoft.WindowsAzure.Storage;
//using Microsoft.WindowsAzure.Storage.Blob;
//using Microsoft.WindowsAzure.Storage.Table;
using Sandboxable.Microsoft.WindowsAzure.Storage;
using Sandboxable.Microsoft.WindowsAzure.Storage.Blob;
using Sandboxable.Microsoft.WindowsAzure.Storage.Table;

namespace VelvetThunderApiMF.Services
{
    public class AzureJsonDataService
    {
        private CloudTable table;
        private CloudBlobContainer container;

        public AzureJsonDataService()
        {
            var connectionString = "DefaultEndpointsProtocol=https;AccountName=azstorage;AccountKey=Djwkh/r7HdLHZ58livVrp96U+Q/7I1Lk7xn2ckTD21Zh2NZpaZPFqysCSeIzxUbrjEZ11zM8oWn3ZPPQnUb8xA==;EndpointSuffix=core.windows.net";

            CloudStorageAccount storageAccount =
                CloudStorageAccount.Parse(connectionString);

            var blobClient = storageAccount.CreateCloudBlobClient();
            this.container = blobClient.GetContainerReference("eternalearth");
            this.container.CreateIfNotExists();
        }


        public void UpdateFileContent(string fileContent, string filePath)
        {
            var filename = string.Format(filePath);
            var blockBlob = this.container.GetBlockBlobReference(filename);

            using (var memory = new MemoryStream())
            using (var writer = new StreamWriter(memory))
            {
                writer.Write(fileContent);
                writer.Flush();
                memory.Seek(0, SeekOrigin.Begin);

                blockBlob.UploadFromStream(memory);
            }

            blockBlob.Properties.ContentType = "application/json";
            blockBlob.SetProperties();
        }

        public string GetFileContent(string filePath)
        {
            var blockBlob = this.container.GetBlockBlobReference(filePath);

            using (var memory = new MemoryStream())
            using (var reader = new StreamReader(memory))
            {
                blockBlob.DownloadToStream(memory);
                memory.Seek(0, SeekOrigin.Begin);

                return reader.ReadToEnd();
            }
        }
    }
}