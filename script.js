var request = new XMLHttpRequest();

request.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
);

request.send();

request.onload = function () {
  var res = JSON.parse(request.response);
  console.log(res);

  function create_tr() {
    var tr = document.createElement("tr");
    return tr;
  }
  function create_th(tagname, attrname, attrvalue, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML = content;
    return ele;
  }

  function create_td(tagname, content) {
    var ele = document.createElement(tagname);
    ele.innerHTML = content;
    return ele;
  }

  var table = document.createElement("table");
  table.className = "table";

  var thead = document.createElement("thead");
  thead.className = "thead-dark";

  var thead_tr = create_tr();

  var th1 = create_th("th", "scope", "col", "id");
  var th2 = create_th("th", "scope", "col", "name");
  var th3 = create_th("th", "scope", "col", "email");

  thead_tr.append(th1, th2, th3);
  thead.append(thead_tr);

  for (var i = 0; i < 10; i++) {
    var tbody = document.createElement("tbody");
    var body_tr1 = create_tr();
    var td1 = create_td("td", res[i].id);
    var td2 = create_td("td", res[i].name);
    var td3 = create_td("td", res[i].email);

    body_tr1.append(td1, td2, td3);
    tbody.append(body_tr1);
    table.append(thead, tbody);
    document.body.append(table);
  }

  var pag = document.createElement("nav");
  pag.innerHTML = `<nav aria-label="Page navigation example">
<ul class="pagination justify-content-center">
  <li class="page-item">
    <a class="page-link" href="#" aria-label="Previous">
      <span aria-hidden="true">&laquo;</span>
    </a>
  </li>
  <li class="page-item"><a class="page-link" href="./index.html">1</a></li>
  <li class="page-item"><a class="page-link" href="./script2.html">2</a></li>
  <li class="page-item"><a class="page-link" href="./script3.html">3</a></li>
  <li class="page-item"><a class="page-link" href="./script4.html">4</a></li>
  <li class="page-item"><a class="page-link" href="./script5.html">5</a></li>
  <li class="page-item"><a class="page-link" href="./script6.html">6</a></li>
  <li class="page-item"><a class="page-link" href="./script7.html">7</a></li>
  <li class="page-item"><a class="page-link" href="./script8.html">8</a></li>
  <li class="page-item"><a class="page-link" href="./script9.html">9</a></li>
  <li class="page-item"><a class="page-link" href="./script10.html">10</a></li>

  <li class="page-item">
    <a class="page-link" href="#" aria-label="Next">
      <span aria-hidden="true">&raquo;</span>
    </a>
  </li>
</ul>
</nav>`;
  document.body.append(pag);
};
