using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VelvetThunderApiMF.Models;

namespace VelvetThunderApiMF.Services
{
    public class PollutionScoreService
    {
        public double GetOverallPolutionScore(string company)
        {
            double polutionScore = new Random().Next(11);

            return polutionScore;
        }

        public void CreateCompanyPollutionMap(Company company)
        {
            
        }

        public CompanyPollutionScore GetDetailedCompanyPollutionScore(string name)
        {
            return new CompanyPollutionScore();
        }
    }
}