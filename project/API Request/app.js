const requestUrl = "https://api.github.com/users/rishavconsolelog21";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl);
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(this.responseText);
    console.log(data.followers);
    document
      .querySelector(".card img")
      .setAttribute("src", `${data.avatar_url}`);
    document.querySelector(
      "h4"
    ).innerHTML = `Username: ${data.name} , Followers: ${data.followers}`;
    document.querySelector("h4").style.fontWeight = `bold`;
    document.querySelector("p").innerHTML = `${data.bio}  ${data.blog}`;
  }
};
xhr.send();
