package threesolid;

import java.awt.*;        // Using AWT container and component classes
import java.awt.event.*;  // Using AWT event classes and listener interfaces
import java.io.*;

//import threesolid.IWorker;   // I don't think we need since it's in the same package -MM

class Worker implements IWorker {
	private String name = "";

  	public String getName() 
  	{
    	return name;
  	}

  	public void setName(String name) 
  	{
      	this.name = name;
  	}

  	public String work() 
  	{  

  		if (name == "") 
    	{
       		return "I'm working already!";
    	}
    	else 
    	{
       		return name + " is working very hard!";
    	}
	}

	public String eat() 
	{
		if (name == "") 
    	{
       		return "I'm eating already!";
    	}
    	else 
    	{
    		return name + " is eating a double cheeseburger with special sauce and bacon flavored Skittles!";
    	}
	}

      public Boolean addpositive(int a, int b)
    {
      if ((a+b) > 0)
        return(true);
      return(false);
    }
}