// ---------------Data--------------------------------
var concertList = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "number": 1,
        "Place Name": " SK올림픽핸드볼경기장 <br> SK Olympic Handball Gymnasium",
        "icon": "assets/concerts/2018_4seasons_SS.jpg",
        "Type": "Concert",
        "Country": "South Korea",
        "City": "Seoul",
        "Address (Local)": " 서울특별시 송파구 방이동 88-2번지 외 3필지 SK올림픽핸드볼경기장",
        "Address (English)": "SK Olympic Handball Gymnasium, Bangi-dong, Songpa-gu, Seoul, South Korea",
        "Events": "2018 Mamamoo Concert 4Seasons S/S",
        "Date": "20180818-20180819",
        "Remarks": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          127.126313,
          37.517345
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "number": 2,
        "Place Name": "新莊體育館 <br> Xinzhuang Gymnasium",
        "icon": "assets/concerts/2018_4seasons_SS.jpg",
        "Type": "Concert",
        "Country": "Taiwan",
        "City": "New Taipei City",
        "Address (Local)": "台灣新北市新莊區中華路一段75號 新莊體育館",
        "Address (English)": "Xinzhuang Gymnasium, No. 75, Section 1, Zhonghua Road, Xinzhuang District, New Taipei City, Taiwan",
        "Events": "2018 Mamamoo Concert 4Seasons S/S",
        "Date": 20180901,
        "Remarks": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          121.449257,
          25.0404675
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "number": 3,
        "Place Name": "亞洲國際博覽館 <br> AsiaWorld–Expo Hall 2",
        "icon": "assets/concerts/2018_4seasons_SS.jpg",
        "Type": "Concert",
        "Country": "China",
        "City": "Hong Kong",
        "Address (Local)": "香港大嶼山 香港國際機場 亞洲國際博覽館",
        "Address (English)": "AsiaWorld–Expo, 1 Airport Expo Boulevard, Chek Lap Kok, Lantau Island, Hong Kong",
        "Events": "2018 Mamamoo Concert 4Seasons S/S",
        "Date": 20180902,
        "Remarks": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          113.7908527,
          22.321343
        ]
      }
    }
  ]
};

var rbwList ={
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "number": 1,
        "Place Name": "RBW 본사 <br> RBWHead Office",
        "icon": "assets/rbw.png",
        "Type": "RBW",
        "Country": "South Korea",
        "City": "Seoul",
        "Address (Local)": "서울특별시 광진구 자양로 129, RBW타워",
        "Address (English)": "RBW Tower, 129 Jayang-ro, Gwangjin-gu, Seoul, Korea",
        "Events": "",
        "Date": "",
        "Remarks": "E-mail. info@rbbridge.com <br> Homepage. www.rbbridge.com"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          127.0830189,
          37.5393496
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "number": 2,
        "Place Name": "RBW 인큐베이팅 센터 <br> RBW Incubating Center",
        "icon": "assets/rbw.png",
        "Type": "RBW",
        "Country": "South Korea",
        "City": "Seoul",
        "Address (Local)": "서울특별시 동대문구 장한로 20길 7, B1",
        "Address (English)": "Rainbowbridge World, B1, 7, Janghan-Ro, 20-Gil, Dongdaemun-Gu, Seoul, Korea",
        "Events": "",
        "Date": "",
        "Remarks": "E-mail. info@rbbridge.com <br> Homepage. www.rbbridge.com"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          127.0700213,
          37.56864479
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "number": 3,
        "Place Name": "RBW JAPAN",
        "icon": "assets/rbw.png",
        "Type": "RBW",
        "Country": "Japan",
        "City": "Tokyo",
        "Address (Local)": "〒153-0043 東京都目黒区東山３-７−1 2階",
        "Address (English)": "RBW JAPAN Inc, 2F, 3-7-1, Higashiyama, Meguro-ku, Tokyo (153-0043)",
        "Events": "",
        "Date": "",
        "Remarks": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          139.6875695,
          35.6498709
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "number": 4,
        "Place Name": "오버더레인보우 <br>  Over The Rainbow Lounge",
        "icon": "assets/RBW/lounge.png",
        "Type": "RBW",
        "Country": "South Korea",
        "City": "Seoul",
        "Address (Local)": "서울시 광진구 자양로 129, RBW타워 1층",
        "Address (English)": "1/F, RBW Tower, 129 Jayang-ro, Gwangjin-gu, Seoul, Korea",
        "Events": "",
        "Date": "From 20220913",
        "Remarks": "<a href='https://www.instagram.com/or_overtherainbow/' target='_blank'>https://www.instagram.com/or_overtherainbow/</a>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          127.080334,
          37.5392597
        ]
      }
    }
  ]
};





// ---------------Icons--------------------------------

var createIcon = L.Icon.extend({
    options: {
        iconSize:     [38, 38]
    }
});

var concertIcon = new createIcon({iconUrl: 'assets/concert.svg'});
var rbwIcon = new createIcon({iconUrl: 'assets/rbw.png'});

// ---------------Functions--------------------------------
//Build an attributes array from the data
function processData(data){
    //empty array to hold attributes
    var attributes = [];

    //properties of the first feature in the dataset
    var properties = data.features[0].properties;

    //push each attribute name into attributes array
    for (var attribute in properties){
		attributes.push(attribute);
    };

    return attributes;
};

function pointToLayer(feature, latlng, attributes, icon){
    //Determine which attribute to visualize with proportional symbols
    var attribute = attributes[0];
	
	var layer = L.marker(latlng, {icon: icon});

    //build popup content string
    var popupContent = "<p><b>Name: </b> " + feature.properties["Place Name"] + "</p><p><b></p>";

    //bind the popup to the circle marker
    layer.bindPopup(popupContent);

    //event listeners to open popup on hover
    layer.on({
        mouseover: function(){
            this.openPopup();
        },
        mouseout: function(){
            this.closePopup();
        },
		click: function (){
			$('#datapanel').html('<h4>' + feature.properties["Place Name"] + '</h4><br>');
			for (i = 2; i < attributes.length; i++) {				
				if (attributes[i]=='icon')
					$('#datapanel').append('<img src="' + feature.properties[attributes[i]] + '" width="100%" ><table class="comicGreen"><tbody><tr>');
				else{					
					$('#datapanel').append('<td>' + attributes[i] + '</td>');
					$('#datapanel').append('<td>' + feature.properties[attributes[i]] + '</td>');
				}
				$('#datapanel').append('</tr><tr>');
			}
			$('#datapanel').append('</tr></tbody></table>');
		}
    });
	
    return layer;
};


function createOverlayLayer(data, map, attributes, icon){
    //create a Leaflet GeoJSON layer
    return L.geoJson(data, {
        pointToLayer: function(feature, latlng){
            return pointToLayer(feature, latlng, attributes, icon);
        }
    });
};


// ---------------Legend--------------------------------
var legend = L.control({position: 'bottomleft'});
    legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'legend-control-container');
    labels = ['<div id="temporal-legend"><strong>Legend</strong>'],
    categories = ['RBW','Concerts'];
    urls = ['assets/rbw.png','assets/concert.svg'];

    for (var i = 0; i < categories.length; i++) {

            div.innerHTML += 
            labels.push(
                '<a><img src="'+urls[i]+'" height="30"> '+categories[i]+' </a><br>');
        }
        div.innerHTML = labels.join('</div><br>');
    return div;
    };
    legend.addTo(map);
	
	
	
// ---------------Layer Config--------------------------------

var concerts = createOverlayLayer(concertList, map, processData(concertList),concertIcon);
var rbw = createOverlayLayer(rbwList, map, processData(rbwList),rbwIcon);

var baselayers = {
};

var overlayMaps = {
	"RBW":rbw,
	"Concerts":concerts
};

	
var layerControl = L.control.layers(baselayers, overlayMaps).addTo(map);


// ---------------Search--------------------------------

var poiLayers = L.layerGroup([
		concerts,
		rbw
	])
	.addTo(map);
	
	
L.control.search({
		layer: poiLayers,
		initial: false,
		propertyName: 'Place Name',
		buildTip: function(text, val) {
			var type = val.layer.feature.properties.Type;
			return '<a href="#" class="'+type+'">'+text+' <b style="background-color:aquamarine;">'+type+'</b></a>';
		}
	})
	.addTo(map);
