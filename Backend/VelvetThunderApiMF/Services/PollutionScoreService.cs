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
            //Store File in BLOB storage?
            //
        }

        //expose as get
        public CompanyPollutionScore GetDetailedCompanyPollutionScore(string name)
        {
            return new CompanyPollutionScore();
        }
    }
}