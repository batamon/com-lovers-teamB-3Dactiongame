#pragma strict

var player : GameObject;
var nururi : boolean = true;
var difference_y : float;
var difference_z : float;

function Start () {
	difference_y = 6.0;
	difference_z = 11.8;
}

function Update () {

if(nururi){
	transform.position.x += (player.transform.position.x - transform.position.x) / 10.0;
	transform.position.y += (player.transform.position.y - transform.position.y + difference_y) / 4.0;
	transform.position.z += (player.transform.position.z - transform.position.z - difference_z) / 8.0;
}

 else{
transform.position.x = player.transform.position.x;
transform.position.y = player.transform.position.y + difference_y;
transform.position.z = player.transform.position.z - difference_z;
}

transform.LookAt (player.transform);

}