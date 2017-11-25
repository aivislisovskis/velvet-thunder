using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using Newtonsoft.Json;

namespace VelvetThunderApiMF.Services
{
    public class RamaniApiClient
    {
        public const string apiBaseDomain= @"https://ramani.ujuizi.com/ddl/wms";
        public const string no2Layer = @"simS5seriesNO2Europe/no2_conc";
        public const string apiPackage = @"com.zigurs93.ramaniapi";
        public const string apiToken = @"e247bab10844647700de5f317e5f9611";
        public const string request = @"GetMetadata";
        public const string date = @"2010-11-05T00:00:00.000Z";
        public const string item = "layerDetails";

        public void getMetadata()
        {
            //hydrogen dioxide metadata.
            //string Adress = @"https://ramani.ujuizi.com/ddl/wms?item=layerDetails&layerName=simS5seriesNO2Europe/no2_conc&time=2010-11-05T00:00:00.000Z&request=GetMetadata&token=e247bab10844647700de5f317e5f9611&package=com.zigurs93.ramaniapi";
            string RequestAdress = $"{apiBaseDomain}?item={item}&layerName={no2Layer}&time={date}&request={request}&token={apiToken}&package={apiPackage}";

            HttpClient httpClient = new HttpClient();
            var response = httpClient.GetStringAsync(RequestAdress).Result;
            dynamic getMetadataObject = JsonConvert.DeserializeObject(response);

            string units = getMetadataObject["units"];
            string nearestTimeIso = getMetadataObject["nearestTimeIso"];
        }
    }
}