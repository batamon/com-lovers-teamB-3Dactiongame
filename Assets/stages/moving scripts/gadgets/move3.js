#pragma strict

function Start () {

}

function Update () {
  transform.position = Vector3(transform.position.x,transform.position.y+Mathf.Sin (Time.frameCount *  0.028) * 0.04,transform.position.z);
}