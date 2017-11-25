using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VelvetThunderApiMF.Models
{
    public class Product
    {
        public string Name;
        public string CompanyName;
        public List<Factory> FactoryList;
        public double Score;
    }
}