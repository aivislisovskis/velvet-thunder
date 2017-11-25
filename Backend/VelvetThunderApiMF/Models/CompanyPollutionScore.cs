using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VelvetThunderApiMF.Models
{
    public class CompanyPollutionScore
    {
        public List<FactoryPollutionScore> Score;
        public Company Company;
    }
}