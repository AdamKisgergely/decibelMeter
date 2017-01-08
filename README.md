# decibelMeter
decibel meter app

My project is a decibel measuring program.
Appearence:
  After the running, a welcome page greets the user. The menu for navigation is placed on the left side.
  By this, the user can get to the main paige for the start of the measuring. This page has three part. First is a short "how to run the 
  program" in hungarian. Under this are the results(Number of sample, Average ,Maximum/Minimum). Lastly the two button to start and stop 
  the running of the calculating.
Working:
  After the user hit the Start button, the decibel plugin start to collect datas from the mobil's microfon. These datas are stored in an
  array. While the calculating is running the program gets the length, average, minimum and maximum of this array and indicate in the view.
  With the hit of the stop button the measuring will be stopped and the plugin stop listening to the microfon's signals.
