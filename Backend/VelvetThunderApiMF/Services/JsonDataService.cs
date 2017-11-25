using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using Newtonsoft.Json;
using VelvetThunderApiMF.Models;

namespace VelvetThunderApiMF.Services
{
    public class JsonDataService
    {
        private const string FileName = @"C:\Users\artur\Source\Repos\velvet-thunder\Backend\VelvetThunderApiMF\Data\factories.json";
        public JsonDataService()
        {

        }

        public void readJson()
        {
            List<Factory> factories = JsonConvert.DeserializeObject<List<Factory>>(File.ReadAllText(FileName));
            var count = factories.Count();
            //read JSON?
        }
    }
}