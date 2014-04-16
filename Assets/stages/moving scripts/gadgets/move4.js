#pragma strict

function Start () {

}

function Update () {
  transform.position = Vector3(transform.position.x,transform.position.y+Mathf.Sin (Time.frameCount *  0.035) * 0.01,transform.position.z);
}