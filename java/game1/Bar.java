import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.util.*;
import java.lang.System;

class Bar extends JFrame implements Observer{
  static int x = 10;

  //バーの画像
   static ImageIcon icon3 = new ImageIcon("../img/game/bar.jpg");

  public Bar(){
    setBounds(x,600,88,9);
    //setIcon(icon3);
  }
  //移動メソッド
  void move(int key){
    if(key == KeyEvent.VK_LEFT){
      if(this.x >= 100 + 2){
        x -= 20;
        this.setLocation(x,600);
      }
    }else if(key == KeyEvent.VK_RIGHT){
      if(this.x <= 600-33){
        x += 20;
        this.setLocation(x,600);
      }
    }
    setLocation(x,600);
  }



}
