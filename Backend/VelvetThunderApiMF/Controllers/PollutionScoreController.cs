using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using VelvetThunderApiMF.Services;

namespace VelvetThunderApiMF.Controllers
{
    public class PollutionScoreController : ApiController
    {

        //GET simplescore
        public string GetOverallScore(string companyid)
        {
            var _pollutionScoreService = new PollutionScoreService();
            //_pollutionScoreService.GetOverallPolutionScore(companyid);
            return _pollutionScoreService.GetOverallPolutionScore(companyid).ToString();
        }

        //GET simplescore
        public string GetDetailedScore(int id)
        {
            return "value";
        }
    }
}
