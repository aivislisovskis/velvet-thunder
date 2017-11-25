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
        //exposed as get
        public double GetOverallPolutionScore(string productid)
        {
            double polutionScore = new Random().Next(11);

            return polutionScore;
        }

        public double CalculateFactoryPolutionScore(string productid)
        {
            double polutionScore = new Random().Next(11);

            return polutionScore;
        }
        //exposed as post

        //TODO: ReCheck Models. Something has gone wrong.
        public void CreateCompanyPollutionDataSet(Product product)
        {
            double sumCriteria = 0;
            ProductPollutionScore productPollutionScore = new ProductPollutionScore();
            productPollutionScore.Score = new List<FactoryPollutionScore>();
            foreach (string factoryid in product.FactoryList)
            {
                var factoryPollutionScore = new FactoryPollutionScore
                {
                    Factoryid = factoryid,
                    PollutionScore = CalculateFactoryPolutionScore(factoryid)
                };
                sumCriteria = sumCriteria + factoryPollutionScore.PollutionScore;
                productPollutionScore.Score.Add(factoryPollutionScore);
            }
            productPollutionScore.OverallProductionScore = sumCriteria / product.FactoryList.Count;
            SaveProduct(product);
        }

        public ProductPollutionScore GetDetailedCompanyPollutionScore(string name)
        {
            return new ProductPollutionScore();
        }

        //TODO: Add real calculation
        private double CalculatePollutionForFactory(string factoryId)
        {
            Random random = new Random();
            return random.NextDouble() * (10.0 - 6.5) + 6.5;

        }

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