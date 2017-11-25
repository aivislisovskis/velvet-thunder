using System.Web.Http;
using VelvetThunderApiMF.Models;
using VelvetThunderApiMF.Services;

namespace VelvetThunderApiMF.Controllers
{
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
            return _pollutionScoreService.GetOverallPolutionScore(productId).ToString();
        }

        [HttpGet]
        [Route("detailedscore")]
        public CompanyPollutionScore GetDetailedScore(string productId)
        {
            return  _pollutionScoreService.GetDetailedCompanyPollutionScore(productId);
        }

        [HttpGet]
        [Route("map")]
        public IHttpActionResult GetMap(/*string companyId*/)
        {
            return  Ok(_ramaniApiClient.GetImage());

        }
    }
}
