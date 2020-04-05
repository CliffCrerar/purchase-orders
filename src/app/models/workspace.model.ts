/*
  workspace model
*/

class WorkspaceModel {
  constructor(
    public url: string,
    public selected: boolean,
    public pinned: boolean
  ) { }
}


class WorkSpacesModel {
  constructor(
    public device: string,
    public pinned: boolean
  ) { }
}
