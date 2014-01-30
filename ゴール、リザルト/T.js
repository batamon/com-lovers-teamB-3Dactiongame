function OnMouseUpAsButton() {
    Debug.Log('Now scene is ' + Application.loadedLevelName);
    Application.LoadLevel('Goal');
}