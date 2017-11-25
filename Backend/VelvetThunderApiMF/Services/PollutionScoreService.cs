using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Web;
using Newtonsoft.Json;
using VelvetThunderApiMF.Models;

namespace VelvetThunderApiMF.Services
{
    public class PollutionScoreService
    {
        private AzureJsonDataService _azuerAzureJsonDataService;
        public PollutionScoreService()
        {
            _azuerAzureJsonDataService = new AzureJsonDataService();
        }

        //TODO: save real sum...
        public void CreateProduct(Product product)
        {
            double sum = 0;
            foreach (Factory factory in product.FactoryList)
            {
                sum = sum + factory.Score;
            }
            product.Score = sum / product.FactoryList.Count;
            SaveProduct(product);
        }

        //TODO: GET REAL PRODUCT
        public Product GetProduct(string name)
        {
            string jsonContent = _azuerAzureJsonDataService.GetFileContent(@"products.json");
            var products = JsonConvert.DeserializeObject<List<Product>>(jsonContent) ?? new List<Product>();
            return products.First(x => x.Name == name);

        }

        public List<Factory> GetFactories()
        {
            string jsonContent = _azuerAzureJsonDataService.GetFileContent(@"ACL\factories2.json");
            return JsonConvert.DeserializeObject<List<Factory>>(jsonContent) ?? new List<Factory>();
        }

        
        private void SaveProduct(Product product)
        {
            AzureJsonDataService azuerAzureJsonDataService = new AzureJsonDataService();
            string jsonContent = azuerAzureJsonDataService.GetFileContent(@"products.json");

            List<Product> productList = JsonConvert.DeserializeObject<List<Product>>(jsonContent) ?? new List<Product>();

            productList.Add(product);
            var ser = JsonConvert.SerializeObject(productList);
            azuerAzureJsonDataService.UpdateFileContent(ser, @"products.json");
        }

        public Factory GetFactoyById(string id)
        {
            var factories = GetFactories();
            return GetFactories().First(x => x.UID == id);
        }
    }
}