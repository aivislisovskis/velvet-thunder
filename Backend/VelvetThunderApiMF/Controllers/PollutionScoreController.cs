using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;
using VelvetThunderApiMF.Models;
using VelvetThunderApiMF.Services;

namespace VelvetThunderApiMF.Controllers
{
    [EnableCors("*","*","*")]
    public class PollutionScoreController : ApiController
    {
        private readonly PollutionScoreService _pollutionScoreService;
        private readonly RamaniApiClient _ramaniApiClient;

        public PollutionScoreController()
        {
            _pollutionScoreService = new PollutionScoreService();
            _ramaniApiClient = new RamaniApiClient();
        }

        [HttpGet]
        [Route("score")]
        public string GetOverallScore(string productId)
        {

            return _pollutionScoreService.GetProduct(productId).Score.ToString();
        }

        [HttpGet]
        [Route("factories")]
        public List<Factory> GetAllFactories()
        {
            return _pollutionScoreService.GetFactories();
        }

        [HttpGet]
        [Route("detailedscore")]
        public Product GetDetailedScore(string productId)
        {
            return  _pollutionScoreService.GetProduct(productId);
        }

        [HttpPost]
        [Route("product")]
        public IHttpActionResult AddProduct(ProductApiRequest productRequest)
        {
            Product product = new Product();
            product.FactoryList = new List<Factory>();
            foreach (string factoryId in productRequest.list)
            {
                product.FactoryList.Add(_pollutionScoreService.GetFactoyById(factoryId));
            }
            product.CompanyName = productRequest.company;
            product.Name = productRequest.product;
            _pollutionScoreService.CreateProduct(product);
            return Ok();
        }

        [HttpGet]
        [Route("map")]
        public IHttpActionResult GetMap(/*string companyId*/)
        {
            return  Ok(_ramaniApiClient.GetImage());

        }
    }
}
