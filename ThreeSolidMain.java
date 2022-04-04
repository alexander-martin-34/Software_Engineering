package threesolid;

import java.awt.*;        // Using AWT container and component classes
import java.awt.event.*;  // Using AWT event classes and listener interfaces
import java.io.*;

//import threesolid.IWorker;


public class ThreeSolidMain
{   
   
   public static Manager tsManager = new Manager();

   // The entry main() method
   public static void main(String[] args) 
   {
 
      try 
      {
         System.out.format("Starting ... \n");               
      } 
      catch (Exception main_except)
      {
         main_except.printStackTrace();
      }

            try 
      {
         System.out.format("Stopping ... \n");               
      } 
      catch (Exception main_except)
      {
         main_except.printStackTrace();
      }

      System.exit(0);

   }
 }

//Adam defined Worker in another class file
/* 
class Worker implements IWorker{
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
}*/

//Adam defined SuperWorker in a separate class file
/*class SuperWorker implements IWorker{
	public String work() {
		return "I'm a super worker!";
	}

	public String eat() {
		return "I'm eating a super healthy meal";
	}
}*/

class Manager {
	IWorker worker;

	public void Manager() {

	}
	public void setWorker(IWorker w) {
		worker=w;
	}

	public void manage() {
		worker.work();
	}
}
