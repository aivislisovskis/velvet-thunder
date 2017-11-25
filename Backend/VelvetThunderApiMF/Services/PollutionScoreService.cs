using System;
using System.Collections.Generic;
using System.Linq;
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
        //exposed as get
        public double GetOverallPolutionScore(string company)
        {
            double polutionScore = new Random().Next(11);

            return polutionScore;
        }

        public double CalculateOverallPolutionScore(string company)
        {
            double polutionScore = new Random().Next(11);

            return polutionScore;
        }
        //exposed as post

        //TODO: ReCheck Models. Something has gone wrong.
        public void CreateCompanyPollutionDataSet(Product product)
        {
            ProductPollutionScore productPollutionScore = new ProductPollutionScore();
            productPollutionScore.Score = new List<FactoryPollutionScore>();
            foreach (string factoryid in product.FactoryList)
            {
                var factoryPollutionScore = new FactoryPollutionScore
                {
                    Factoryid = factoryid,
                    PollutionScore = CalculateOverallPolutionScore(factoryid)
                };
                productPollutionScore.Score.Add(factoryPollutionScore);
            }
            SaveProduct(product);
        }

        public ProductPollutionScore GetDetailedCompanyPollutionScore(string name)
        {
            return new ProductPollutionScore();
        }

        //TODO: Add more comprehenesive logic to calculate pollution for factory. 
        private double CalculatePollutionForFactory(string factoryId)
        {
            return 9.2;

        }

        //TODO: Expose as GetFactories() endpoint
        public List<Factory> GetFactories()
        {
            string jsonContent = _azuerAzureJsonDataService.GetFileContent(@"ACL\factories.json");
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
    }
}