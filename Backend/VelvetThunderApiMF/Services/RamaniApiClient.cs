﻿using System;
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

        public void GetMetadata()
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

        public string GetImage()
        {
            //hydrogen dioxide metadata.
            //string Adress = @"https://ramani.ujuizi.com/ddl/wms?item=layerDetails&layerName=simS5seriesNO2Europe/no2_conc&time=2010-11-05T00:00:00.000Z&request=GetMetadata&token=e247bab10844647700de5f317e5f9611&package=com.zigurs93.ramaniapi";
            string RequestAdress = "https://ramani.ujuizi.com/cloud/wms/ramaniddl/tilecache?SERVICE=WMS&REQUEST=GetMap&VERSION=1.1.1&LAYERS=ddl.simS1seriesTwenteNetherlands.smc&STYLES=boxfill%2Frainbow&FORMAT=image%2Fpng&TRANSPARENT=true&HEIGHT=256&WIDTH=256&STYLE=boxfill%2Frainbow&SRS=EPSG%3A3857&ZINDEX=400&REUSETILES=true&TOKEN=&PACKAGE=&COLORSCALERANGE=&ELEVATION=0&EXCEPTIONS=application%2Fvnd.ogc.se_inimage&LOGSCALE=false&NUMCOLORBANDS=250&TIME=2010-11-29T00%3A00%3A00.000Z&BBOX=665307.8941941741,6887893.492833804,704443.6526761843,6927029.251315814&token=e247bab10844647700de5f317e5f9611&package=com.zigurs93.ramaniapi";

            HttpClient httpClient = new HttpClient();
            return  httpClient.GetStringAsync(RequestAdress).Result;
            //dynamic getMetadataObject = JsonConvert.DeserializeObject(response);

            //string units = getMetadataObject["units"];
            //string nearestTimeIso = getMetadataObject["nearestTimeIso"];`
        }
    }
}