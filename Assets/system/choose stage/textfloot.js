#pragma strict

function Start () {

}

function Update () {
transform.position = Vector3(transform.position.x,transform.position.y+Mathf.Sin (Time.frameCount *  0.03) * 0.015,transform.position.z);
}