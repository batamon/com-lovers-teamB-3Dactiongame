#pragma strict

var player : GameObject;

function Start () {
}

function Update () {
/*
transform.position.x += (player.transform.position.x - transform.position.x) / 10.0;
transform.position.y += (player.transform.position.y - transform.position.y + 3.1) / 4.0;
transform.position.z += (player.transform.position.z - transform.position.z - 6.7) / 8.0;
*/

transform.position.x += (player.transform.position.x - transform.position.x) / 10.0;
transform.position.y += (player.transform.position.y - transform.position.y + 3.1) / 4.0;
transform.position.z += (player.transform.position.z - transform.position.z - 6.7) / 8.0;

transform.LookAt (player.transform);

}