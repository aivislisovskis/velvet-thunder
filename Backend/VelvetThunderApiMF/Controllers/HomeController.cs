using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using VelvetThunderApiMF.Services;

namespace VelvetThunderApiMF.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
            JsonDataService jsonDataService = new JsonDataService();
            jsonDataService.readJson();

            RamaniApiClient ramaniApiClient = new RamaniApiClient();
            ramaniApiClient.GetMetadata();
            return View();
        }
    }
}
