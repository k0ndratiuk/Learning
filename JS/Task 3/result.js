// Высота потолков:

document.getElementById("h").innerHTML = localStorage.getItem("h");

// Комната (ширина)

document.getElementById("x").innerHTML = localStorage.getItem("x");

// Комната (длина)

document.getElementById("y").innerHTML = localStorage.getItem("y");

// Комната (площадь пола)

document.getElementById("getSPol").innerHTML = localStorage.getItem("getSPol");

// Комната (площадь стен)

document.getElementById("getSSten").innerHTML = localStorage.getItem(
  "getSSten"
);

// Кухня (ширина)

document.getElementById("xk").innerHTML = localStorage.getItem("xk");

// Кухня (длина)

document.getElementById("yk").innerHTML = localStorage.getItem("yk");

// Кухня (площадь пола)

document.getElementById("kgetSPol").innerHTML = localStorage.getItem(
  "kgetSPol"
);

// Кухня (площадь стен)

document.getElementById("kgetSSten").innerHTML = localStorage.getItem(
  "kgetSSten"
);

// Стяжка (потолок)

document.getElementById("checkSummaStyazhka").innerHTML = localStorage.getItem(
  "checkSummaStyazhka"
);
document.getElementById("summaStyazhka").innerHTML = localStorage.getItem(
  "summaStyazhka"
);

// Демонтаж стяжки (потолок)

document.getElementById(
  "checkSummaStyazhka_dem"
).innerHTML = localStorage.getItem("checkSummaStyazhka_dem");
document.getElementById("summaStyazhka_dem").innerHTML = localStorage.getItem(
  "summaStyazhka_dem"
);

// Штукатурка (стены)

document.getElementById(
  "checkSummaStukaturka"
).innerHTML = localStorage.getItem("checkSummaStukaturka");
document.getElementById("summaStukaturka").innerHTML = localStorage.getItem(
  "summaStukaturka"
);

// Демонтаж штукатурки (стены)

document.getElementById(
  "checkSummaStukaturka_dem"
).innerHTML = localStorage.getItem("checkSummaStukaturka_dem");
document.getElementById("summaStukaturka_dem").innerHTML = localStorage.getItem(
  "summaStukaturka_dem"
);

// Уровень ремонта (эконом)

document.getElementById("economical").innerHTML = localStorage.getItem(
  "economical"
);

// Уровень ремонта (стандарт)

document.getElementById("standard").innerHTML = localStorage.getItem(
  "standard"
);

// Уровень ремонта (премиум)

document.getElementById("premium").innerHTML = localStorage.getItem("premium");

// Напольное покрытие в комнате (паркет)

document.getElementById("ckeckSummaPolPar").innerHTML = localStorage.getItem(
  "ckeckSummaPolPar"
);
document.getElementById("summaPolPar").innerHTML = localStorage.getItem(
  "summaPolPar"
);

// Напольное покрытие в комнате (ламинат)

document.getElementById("ckeckSummaPolLam").innerHTML = localStorage.getItem(
  "ckeckSummaPolLam"
);
document.getElementById("summaPolLam").innerHTML = localStorage.getItem(
  "summaPolLam"
);

// Напольное покрытие в комнате (плитка)

document.getElementById("ckeckSummaPolPli").innerHTML = localStorage.getItem(
  "ckeckSummaPolPli"
);
document.getElementById("summaPolPli").innerHTML = localStorage.getItem(
  "summaPolPli"
);

// Напольное покрытие в комнате (линолеум)

document.getElementById("ckeckSummaPolLen").innerHTML = localStorage.getItem(
  "ckeckSummaPolLen"
);
document.getElementById("summaPolLen").innerHTML = localStorage.getItem(
  "summaPolLen"
);

// Напольное покрытие кухня(паркет)

document.getElementById("ckeckKsummaPolPar").innerHTML = localStorage.getItem(
  "ckeckKsummaPolPar"
);
document.getElementById("ksummaPolPar").innerHTML = localStorage.getItem(
  "ksummaPolPar"
);
// Напольное покрытие кухня (ламинат)

document.getElementById("ckeckKsummaPolLam").innerHTML = localStorage.getItem(
  "ckeckKsummaPolLam"
);
document.getElementById("ksummaPolLam").innerHTML = localStorage.getItem(
  "ksummaPolLam"
);

// Напольное покрытие кухня (плитка)

document.getElementById("ckeckKsummaPolPli").innerHTML = localStorage.getItem(
  "ckeckKsummaPolPli"
);
document.getElementById("ksummaPolPli").innerHTML = localStorage.getItem(
  "ksummaPolPli"
);

// Напольное покрытие в кухне (линолеум)

document.getElementById("ckeckKsummaPolLen").innerHTML = localStorage.getItem(
  "ckeckKsummaPolLen"
);
document.getElementById("ksummaPolLen").innerHTML = localStorage.getItem(
  "ksummaPolLen"
);

// Шумоизоляция:

document.getElementById("ckeckGetSummaShum").innerHTML = localStorage.getItem(
  "ckeckGetSummaShum"
);
document.getElementById("getSummaShum").innerHTML = localStorage.getItem(
  "getSummaShum"
);

// Багеты:

document.getElementById("checkGetSummaBagets").innerHTML = localStorage.getItem(
  "checkGetSummaBagets"
);
document.getElementById("getSummaBagets").innerHTML = localStorage.getItem(
  "getSummaBagets"
);

// Лепнина:

document.getElementById(
  "checkGetSummaLeplina"
).innerHTML = localStorage.getItem("checkGetSummaLeplina");
document.getElementById("getSummaLeplina").innerHTML = localStorage.getItem(
  "getSummaLeplina"
);

// Смеситель:

document.getElementById("checkSummaSmesitel").innerHTML = localStorage.getItem(
  "checkSummaSmesitel"
);
document.getElementById("summaSmesitel").innerHTML = localStorage.getItem(
  "summaSmesitel"
);

// Мойка:

document.getElementById("checkSummaMoyka").innerHTML = localStorage.getItem(
  "checkSummaMoyka"
);
document.getElementById("summaMoyka").innerHTML = localStorage.getItem(
  "summaMoyka"
);

// Всего:

document.getElementById("summaAll").innerHTML = localStorage.getItem(
  "summaAll"
);
