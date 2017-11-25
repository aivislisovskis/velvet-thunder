using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Newtonsoft.Json;
using VelvetThunderApiMF.Models;
using VelvetThunderApiMF.Services;

namespace VelvetThunderApiMF.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";
            //AzureJsonDataService azuerAzureJsonDataService = new AzureJsonDataService();
            //string jsonContent = azuerAzureJsonDataService.GetFileContent(@"products.json");

            //List<Factory> factories = JsonConvert.DeserializeObject<List<Factory>>(jsonContent) ?? new List<Factory>();

            //var newFactory = new Factory();
            //newFactory.Code = "code";
            //newFactory.Description = "desc";
            //newFactory.UID = "UID";

            //factories.Add(newFactory);
            //var ser = JsonConvert.SerializeObject(factories);
            //azuerAzureJsonDataService.UpdateFileContent(ser, @"products.json");




            JsonDataService jsonDataService = new JsonDataService();
            jsonDataService.readJson();

            RamaniApiClient ramaniApiClient = new RamaniApiClient();
            ramaniApiClient.getMetadata();
            return View();
        }
    }
}
