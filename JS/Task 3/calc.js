(function($) {
  jQuery(document).ready(function() {
    $("body").on("change keyup input click", ".only_number", function() {
      if (this.value.match(/[^0-9.]/g)) {
        this.value = this.value.replace(/[,]/g, ".");
        this.value = this.value.replace(/[^0-9.]/g, "");
      }
    });

    //  Price  //
    var price = new Array();
    price["styazhka"] = 200; // Стяжка (потолок)
    price["styazhkaDemont"] = 100; // Демонтаж стяжки (потолок)

    price["shtukaturka"] = 300; // Штукатурка (стены)
    price["shtukaturkaDemont"] = 100; // Демонтаж штукатурки (стены)

    price["koefTypeRemont"] = new Array(); // тип ремонта
    price["koefTypeRemont"][1] = 1; // Уровень ремонта (эконом)
    price["koefTypeRemont"][2] = 1.5; // Уровень ремонта (стандарт)
    price["koefTypeRemont"][3] = 2; // Уровень ремонта (премиум)

    price["polParket"] = 250; // Напольное покрытие (паркет)
    price["polLaminat"] = 150; //Напольное покрытие (ламинат)
    price["polPlitka"] = 200; // Напольное покрытие (плитка)
    price["polLenoleum"] = 100; //Напольное покрытие (линолеум)

    price["shumoizolyaciya"] = 100; // Шумоизоляция
    price["baget"] = 50; // Багеты
    price["lepnina"] = 200; // Лепнина

    price["setSmesitel"] = 600; // Cмеситель
    price["setMoyka"] = 500; //Мойка

    $("#btn").click(function() {
      var x, xk, y, yk, h, moyka, smesitel;
      x = document.getElementById("x_room").value;
      xk = document.getElementById("room_x").value;
      y = document.getElementById("y_room").value;
      yk = document.getElementById("room_y").value;
      h = document.getElementById("height_rooms").value;
      smesitel = document.getElementById("smesirtel").value;
      moyka = document.getElementById("moyika").value;
      // document.getElementById("height_rooms").innerHTML = h;

      //Получение площади стен в комнате
      function getSSten() {
        return 2 * x * h + 2 * y * h;
      }

      //Получение периметра стен в комнате
      function getPSten() {
        return 2 * x + 2 * y;
      }

      //Получение площади пола в комнате
      function getSPol() {
        return x * y;
      }

      //Получение площади потолка в комнате
      function getSPotolok() {
        return x * y;
      }
      //Получение площади стен в кухне
      function kgetSSten() {
        return 2 * xk * h + 2 * yk * h;
      }

      //Получение периметра стен в кухне
      function kgetPSten() {
        return 2 * xk + 2 * yk;
      }

      //Получение площади пола в кухне
      function kgetSPol() {
        return xk * yk;
      }

      //Получение площади потолка в кухне
      function kgetSPotolok() {
        return xk * yk;
      }

      function summaStyazhka() {
        let chbox;
        chbox = document.getElementById("screed");
        if (chbox.checked) {
          let summaStyazhka = getSPol() * price["styazhka"];
          let ksummaStyazhka = kgetSPol() * price["styazhka"];
          var allSummaStyazhka = summaStyazhka + ksummaStyazhka;
        } else {
          allSummaStyazhka = 0;
        }
        return allSummaStyazhka;
      }

      function summaStyazhka_dem() {
        let chbox;
        chbox = document.getElementById("screedRemoval");
        if (chbox.checked) {
          var summaStyzhka_dem = getSPol() * price["styazhkaDemont"];
          var ksummaStyzhka_dem = kgetSPol() * price["styazhkaDemont"];
          var allSummaStyazhka_dem = summaStyzhka_dem + ksummaStyzhka_dem;
        } else {
          allSummaStyazhka_dem = 0;
        }
        return allSummaStyazhka_dem;
      }

      function summaStukaturka() {
        let chbox;
        chbox = document.getElementById("stucco");
        if (chbox.checked) {
          var summaStukaturka = getSSten() * price["shtukaturka"];
          var ksummaStukaturka = kgetSSten() * price["shtukaturka"];
          var allSummaStukaturka = summaStukaturka + ksummaStukaturka;
        } else {
          allSummaStukaturka = 0;
        }
        return allSummaStukaturka;
      }

      function summaStukaturka_dem() {
        let chbox;
        chbox = document.getElementById("stuccoRemoval");
        if (chbox.checked) {
          var summaStukaturka_dem = getPSten() * price["shtukaturkaDemont"];
          var ksummaStukaturka_dem = kgetPSten() * price["shtukaturkaDemont"];
          var allSummaStukaturka_dem =
            summaStukaturka_dem + ksummaStukaturka_dem;
        } else {
          allSummaStukaturka_dem = 0;
        }
        return allSummaStukaturka_dem;
      }

      function koefTypeRemont() {
        var koef;
        var rad = document.getElementsByName("repairLevel");
        for (var i = 0; i < rad.length; i++) {
          if (rad[i].checked) {
            if (i == 0) {
              koef = price["koefTypeRemont"][1];
              // console.log(koef);
              return koef;
            } else if (i == 1) {
              koef = price["koefTypeRemont"][2];
              // console.log(koef);
              return koef;
            } else if (i == 2) {
              koef = price["koefTypeRemont"][3];
              // console.log(koef);
              return koef;
            }
          }
        }
      }

      //Цена паркета в комнате
      function cenaPolPar() {
        let type_pol = document.getElementById("flooring");
        let value = type_pol.value;
        if (value == "parquet") {
          cenaPol = price["polParket"];
        } else {
          cenaPol = 0;
        }
        return cenaPol;
      }

      // Цена ламината в комнате
      function cenaPolLam() {
        let type_pol = document.getElementById("flooring");
        let value = type_pol.value;
        if (value == "laminate") {
          cenaPol = price["polLaminat"];
        } else {
          cenaPol = 0;
        }
        return cenaPol;
      }

      //Цена плитки в комнате
      function cenaPolPli() {
        let type_pol = document.getElementById("flooring");
        let value = type_pol.value;
        if (value == "tile") {
          cenaPol = price["polPlitka"];
        } else {
          cenaPol = 0;
        }
        return cenaPol;
      }

      //Цена ленолиума в комнате
      function cenaPolLen() {
        let type_pol = document.getElementById("flooring");
        let value = type_pol.value;
        if (value == "linoleum") {
          cenaPol = price["polLenoleum"];
        } else {
          cenaPol = 0;
        }
        return cenaPol;
      }

      //Цена паркета в кухне
      function kcenaPolPar() {
        let type_polK = document.getElementById("flooringk");
        let valueK = type_polK.value;
        if (valueK == "parquet") {
          cenaPol = price["polParket"];
        } else {
          cenaPol = 0;
        }
        return cenaPol;
      }

      // Цена ламината в кухне
      function kcenaPolLam() {
        let type_polK = document.getElementById("flooringk");
        let valueK = type_polK.value;
        if (valueK == "laminate") {
          cenaPol = price["polLaminat"];
        } else {
          cenaPol = 0;
        }
        return cenaPol;
      }

      //Цена плитки в кухне
      function kcenaPolPli() {
        let type_polK = document.getElementById("flooringk");
        let valueK = type_polK.value;
        if (valueK == "tile") {
          cenaPol = price["polPlitka"];
        } else {
          cenaPol = 0;
        }
        return cenaPol;
      }
      //Цена ленолиума в кухне
      function kcenaPolLen() {
        let type_polK = document.getElementById("flooringk");
        let valueK = type_polK.value;
        if (valueK == "linoleum") {
          cenaPol = price["polLenoleum"];
        } else {
          cenaPol = 0;
        }
        return cenaPol;
      }

      var summaPolPar = getSPol() * cenaPolPar();
      var summaPolLam = getSPol() * cenaPolLam();
      var summaPolPli = getSPol() * cenaPolPli();
      var summaPolLen = getSPol() * cenaPolLen();
      var ksummaPolPar = kgetSPol() * kcenaPolPar();
      var ksummaPolLam = kgetSPol() * kcenaPolLam();
      var ksummaPolPli = kgetSPol() * kcenaPolPli();
      var ksummaPolLen = kgetSPol() * kcenaPolLen();

      function getSummaShum() {
        let chbox;
        chbox = document.getElementById("soundproofing");
        if (chbox.checked) {
          var summaShum = price["shumoizolyaciya"];
        } else {
          summaShum = 0;
        }
        return summaShum;
      }

      function getSummaBagets() {
        let chbox;
        chbox = document.getElementById("baguettes");
        if (chbox.checked) {
          var summaBagets = price["baget"];
        } else {
          summaBagets = 0;
        }
        return summaBagets;
      }

      function getSummaLeplina() {
        let chbox;
        chbox = document.getElementById("lepnina");
        if (chbox.checked) {
          var summaLepnina = price["lepnina"];
        } else {
          summaLepnina = 0;
        }
        return summaLepnina;
      }

      var summaSmesitel = smesitel * price["setSmesitel"];
      var summaMoyka = moyka * price["setMoyka"];

      function summaAll() {
        var allSumma =
          summaStyazhka() +
          summaStyazhka_dem() +
          summaStukaturka() +
          summaStukaturka_dem() +
          summaPolPar +
          summaPolLam +
          summaPolPli +
          summaPolLen +
          ksummaPolPar +
          ksummaPolLam +
          ksummaPolPli +
          ksummaPolLen +
          getSummaLeplina() +
          getSummaShum() +
          getSummaBagets() +
          summaSmesitel +
          summaMoyka;
        return allSumma * koefTypeRemont();
      }

      function check(value) {
        if (value > 0) {
          return "+";
        } else {
          return " ";
        }
      }

      function checked(number) {
        if (number > 0) {
          return number;
        } else {
          return " ";
        }
      }

      function level1(value) {
        if (value == price["koefTypeRemont"][1]) {
          return "+";
        } else {
          return " ";
        }
      }
      function level2(value) {
        if (value == price["koefTypeRemont"][2]) {
          return "+";
        } else {
          return " ";
        }
      }
      function level3(value) {
        if (value == price["koefTypeRemont"][3]) {
          return "+";
        } else {
          return " ";
        }
      }
      // console.log("Высота потолков: " + h);
      // console.log("Комната (ширина): " + x);
      // console.log("Комната (длина): " + y);
      // console.log("Комната (площадь пола): " + getSPol());
      // console.log("Комната (площадь стен): " + getSSten());
      // console.log("Кухня (ширина): " + xk);
      // console.log("Кухня (длина): " + yk);
      // console.log("Кухня (площадь пола): " + kgetSPol());
      // console.log("Кухня (площадь стен): " + kgetSSten());
      // console.log("Стяжка (потолок): " + summaStyazhka());
      // console.log("Демонтаж стяжки (потолок): " + summaStyazhka_dem());
      // console.log("Штукатурка (стены): " + summaStukaturka());
      // console.log("Демонтаж штукатурки (стены): " + summaStukaturka_dem());
      // console.log("Уровень ремонта (эконом)");
      // console.log("Уровень ремонта (стандарт)");
      // console.log("Уровень ремонта (премиум)");
      // console.log("Напольное покрытие в комнате (паркет) : " + summaPolPar);
      // console.log("Напольное покрытие комната (ламинат): " + summaPolLam);
      // console.log("Напольное покрытие комната (плитка): " + summaPolPli);
      // console.log("Напольное покрытие комната (линолеум): " + summaPolLen);
      // console.log("Напольное покрытие кухня(паркет) : " + ksummaPolPar);
      // console.log("Напольное покрытие кухня (ламинат): " + ksummaPolLam);
      // console.log("Напольное покрытие кухня (плитка): " + ksummaPolPli);
      // console.log("Напольное покрытие кухня (линолеум): " + ksummaPolLen);
      // console.log("Шумоизоляция: " + getSummaShum());
      // console.log("Багеты: " + getSummaBagets());
      // console.log("Лепнина: " + getSummaLeplina());
      // console.log("Смеситель: " + summaSmesitel);
      // console.log("Мойка: " + summaMoyka);
      // console.log("Всего: " + summaAll());

      // localStorage.setItem("check");
      // localStorage.setItem("");
      localStorage.setItem("h", h);
      localStorage.setItem("x", x);
      localStorage.setItem("y", y);
      localStorage.setItem("getSPol", getSPol());
      localStorage.setItem("getSSten", getSSten());
      localStorage.setItem("xk", xk);
      localStorage.setItem("yk", yk);
      localStorage.setItem("kgetSPol", kgetSPol());
      localStorage.setItem("kgetSSten", kgetSSten());
      localStorage.setItem("checkSummaStyazhka", check(summaStyazhka()));
      localStorage.setItem("summaStyazhka", checked(summaStyazhka()));
      localStorage.setItem(
        "checkSummaStyazhka_dem",
        check(summaStyazhka_dem())
      );
      localStorage.setItem("summaStyazhka_dem", checked(summaStyazhka_dem()));
      localStorage.setItem("checkSummaStukaturka", check(summaStukaturka()));
      localStorage.setItem("summaStukaturka", checked(summaStukaturka()));
      localStorage.setItem(
        "checkSummaStukaturka_dem",
        check(summaStukaturka_dem())
      );
      localStorage.setItem(
        "summaStukaturka_dem",
        checked(summaStukaturka_dem())
      );
      localStorage.setItem("economical", level1(koefTypeRemont()));
      localStorage.setItem("standard", level2(koefTypeRemont()));
      localStorage.setItem("premium", level3(koefTypeRemont()));
      localStorage.setItem("ckeckSummaPolPar", check(summaPolPar));
      localStorage.setItem("summaPolPar", checked(summaPolPar));
      localStorage.setItem("ckeckSummaPolLam", check(summaPolLam));
      localStorage.setItem("summaPolLam", checked(summaPolLam));
      localStorage.setItem("ckeckSummaPolPli", check(summaPolPli));
      localStorage.setItem("summaPolPli", checked(summaPolPli));
      localStorage.setItem("ckeckSummaPolLen", check(summaPolLen));
      localStorage.setItem("summaPolLen", checked(summaPolLen));
      localStorage.setItem("ckeckKsummaPolPar", check(ksummaPolPar));
      localStorage.setItem("ksummaPolPar", checked(ksummaPolPar));
      localStorage.setItem("ckeckKsummaPolLam", check(ksummaPolLam));
      localStorage.setItem("ksummaPolLam", checked(ksummaPolLam));
      localStorage.setItem("ckeckKsummaPolPli", check(ksummaPolPli));
      localStorage.setItem("ksummaPolPli", checked(ksummaPolPli));
      localStorage.setItem("ckeckKsummaPolLen", check(ksummaPolLen));
      localStorage.setItem("ksummaPolLen", checked(ksummaPolLen));
      localStorage.setItem("ckeckGetSummaShum", check(getSummaShum()));
      localStorage.setItem("getSummaShum", checked(getSummaShum()));
      localStorage.setItem("checkGetSummaBagets", check(getSummaBagets()));
      localStorage.setItem("getSummaBagets", checked(getSummaBagets()));
      localStorage.setItem("checkGetSummaLeplina", check(getSummaLeplina()));
      localStorage.setItem("getSummaLeplina", checked(getSummaLeplina()));
      localStorage.setItem("checkSummaSmesitel", checked(smesitel));
      localStorage.setItem("summaSmesitel", checked(summaSmesitel));
      localStorage.setItem("checkSummaMoyka", checked(moyka));
      localStorage.setItem("summaMoyka", checked(summaMoyka));
      localStorage.setItem("summaAll", summaAll());

      function next() {
        if (isNaN(summaAll())) {
          alert("Выберите уровень ремонта");
        } else if (!x) {
          alert("Введите ширину комнаты");
          console.log(typeof x);
        } else if (!y) {
          alert("Введите длину комнаты");
        } else if (!xk) {
          alert("Введите ширину кухни");
        } else if (!yk) {
          alert("Введите длину кухни");
        } else if (!h) {
          alert("Введите высоту потолков");
        } else {
          window.location.href = "result.html";
        }
      }
      next();
    });
  });
})(jQuery);
