package threesolid;

public class Robot implements IRobot {
		private String name = "Ben";

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

	  		if (name == "Ben") 
	    	{
	       		return "Please insert girder!";
	    	}
	    	else 
	    	{
	       		return name + " is working very hard!";
	    	}
		}

	      public Boolean addpositive(int a, int b)
	    {
	      if ((a+b) > 0)
	        return(true);
	      return(false);
	    }
	}
