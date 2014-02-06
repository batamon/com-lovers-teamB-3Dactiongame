#pragma strict

function Start () {

}

function Update () {
if(Input.GetButtonDown("Jump")) {
        Application.LoadLevel("stage");
    }
}