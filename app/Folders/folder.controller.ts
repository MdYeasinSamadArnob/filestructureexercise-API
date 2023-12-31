import { Request, RequestHandler, Response } from "express";
import { FolderTree } from "./folder.model";
import { IfolderData } from "./folder.interface";
import { FolderService } from "./folder.service";

const getAllFolderNode: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const allFolderTree = await FolderService.getAllFolderNode();
  res.status(200).json(allFolderTree[0]);
};
const createFolderNode: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const payload = {
    ...req.body,
    isOpen: false,
    child: [],
    key: Date.now(),
  };
  console.log("The Payload is :",payload);
  const newFolderNode = await FolderService.createFolderNode(payload);
  if (newFolderNode) {
    res.status(200).json("created");
  } else {
    res.status(200).json("Failed");
  }
};

const addChildNodeinParentNodeById: RequestHandler = async (
  req: Request,
  res: Response
) => {
  const { id, name } = req.body;
  const newChild = new FolderTree({
    name: name,
    isOpen: false,
    child: [],
    key: Date.now(),
  });
  
  console.log("The newChild is :",newChild);
    // localDB root id: 653179d87dae277fc80a74a6
  const newFolder = await FolderService.addChildNodeinParentNodeById(
    "653b4de3407359826ad118e6", // host root id 
    id,
    newChild
  );
  if (newFolder) {
    res.status(200).json(newChild);
  } else {
    res.status(200).json("failed");
  }
};

const deleteNodeById: RequestHandler = async (req: Request, res: Response) => {
  const { id } = req.body;
  // localDB root id: 653179d87dae277fc80a74a6
  if (id === "653b4de3407359826ad118e6") { // host root id 
    return res.status(200).json("root can't be deleted");
  }
  const result = await FolderService.deleteNodeById(
    "653b4de3407359826ad118e6",
    id
  );
  if (result) {
    res.status(200).json("Deleted");
  } else {
    res.status(200).json("failed");
  }
};

export const folderController = {
  getAllFolderNode,
  createFolderNode,
  addChildNodeinParentNodeById,
  deleteNodeById,
};
