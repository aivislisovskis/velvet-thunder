using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VelvetThunderApiMF.Models;

namespace VelvetThunderApiMF.Services
{
    public class PollutionScoreService
    {
        //expose as get
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
        //expose as post
        public void CreateCompanyPollutionDataSet(Company company)
        {
            FactoryPollutionScore factoryPollutionScore;

            CompanyPollutionScore companyPollutionScore = new CompanyPollutionScore();
            companyPollutionScore.Score = new List<FactoryPollutionScore>();
            foreach (string factoryid in company.FactoryList)
            {
                factoryPollutionScore = new FactoryPollutionScore
                {
                    Factoryid = factoryid,
                    PollutionScore = CalculateOverallPolutionScore(factoryid)
                };
                companyPollutionScore.Score.Add(factoryPollutionScore);

            }
            //TODO: Dump in JSON

        }

        //expose as get
        public CompanyPollutionScore GetDetailedCompanyPollutionScore(string name)
        {
            return new CompanyPollutionScore();
        }

        private double CalculatePollutionForFactory(string factoryId)
        {
            return 9.2;

        }
    }
}