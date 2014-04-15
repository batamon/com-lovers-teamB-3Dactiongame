#pragma strict

var ojisan : GameObject;

function Start () {

}

function Update () {

transform.position = Vector3(ojisan.transform.position.x ,ojisan.transform.position.y + 40.0,ojisan.transform.position.z + -2.0);

}