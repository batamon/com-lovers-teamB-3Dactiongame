#pragma strict

var player : GameObject;
var nururi : boolean = true;

function Start () {
}

function Update () {

if(nururi){
	transform.position.x += (player.transform.position.x - transform.position.x) / 10.0;
	transform.position.y += (player.transform.position.y - transform.position.y + 7.4) / 4.0;
	transform.position.z += (player.transform.position.z - transform.position.z - 14.0) / 8.0;
}

 else{
transform.position.x = player.transform.position.x;
transform.position.y = player.transform.position.y + 7.4;
transform.position.z = player.transform.position.z - 14.0;
}

transform.LookAt (player.transform);

}