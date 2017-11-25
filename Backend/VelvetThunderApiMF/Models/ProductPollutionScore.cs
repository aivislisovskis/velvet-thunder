using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VelvetThunderApiMF.Models
{
    public class ProductPollutionScore
    {
        public List<FactoryPollutionScore> Score;
        public Product Product;
    }
}