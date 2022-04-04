package threesolid;

import java.awt.*;        // Using AWT container and component classes
import java.awt.event.*;  // Using AWT event classes and listener interfaces
import java.io.*;

import threesolid.IWorker;


class SuperWorker implements IWorker{
	public String work() {
		return "I'm a super worker!";
	}

	public String eat() {
		return "I'm eating a super healthy meal";
	}
}