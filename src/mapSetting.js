import { loadModules } from "esri-loader";

export function loadMap(vm) {
  loadModules(["esri/Map", "esri/views/MapView", "esri/widgets/Search"], {
    css: true,
  }).then(([ArcGISMap, MapView, Search]) => {
    const map = new ArcGISMap({
      basemap: "topo-vector",
    });

    vm.view = new MapView({
      container: vm.$el,
      map: map,
      center: [57.36, 51.47],
      zoom: 11,
    });

    // добавление виджета поиска
    const search = new Search({
      view: vm.view,
    });

    vm.view.ui.add(search, "top-right");

    // popup с информацией о точке на карте
    vm.view.on("click", function(evt) {
      search.clear();
      vm.view.popup.clear();
      if (search.activeSource) {
        var geocoder = search.activeSource.locator;
        var params = {
          location: evt.mapPoint,
        };
        geocoder
          .locationToAddress(params)
          .then(function(response) {
            var address = response.address;
            showPopup(address, evt.mapPoint);
          })
          .catch(function() {
            showPopup("No address found.", evt.mapPoint);
          });
      }
    });

    function showPopup(address, pt) {
      vm.view.popup.open({
        title:
          +Math.round(pt.longitude * 100000) / 100000 +
          "," +
          Math.round(pt.latitude * 100000) / 100000,
        content: address,
        location: pt,
      });
    }
  });
}
