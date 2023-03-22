function getStats() {
    var username = document.getElementById("username").value;
    var url = "https://open.faceit.com/data/v4/players?nickname=" + username;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.setRequestHeader("Authorization", "Bearer e91d6b16-365a-4da4-846e-d06ea670d25c");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        var level = response.games.csgo.faceit_elo / 100;
        document.getElementById("stats").innerHTML = "Level: " + response;
      }
    };
    xhr.send();
  }