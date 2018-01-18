import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.util.*;
import java.lang.System;


public class SystemGame extends JPanel implements KeyListener,Runnable,Observer{
  //初期設定
  Bar b;
  Thread t1,t2;

  Panel p;
  String str;
  String[] PanelNames;

  int kc=0;

  //キー判定
  boolean left,right=false;

  public SystemGame(Panel p,String s,String[] PanelNames){
    //コンストラクタ
    this.p = p;
    str = s;
    this.PanelNames = PanelNames;

    //インスタンス生成
    b = new Bar();

    //パネルに貼り付け
    this.add(b);

    //スレッド開始
    t1 = new Thread(b);
    t2 = new Thread(this);

    //オブサーバー登録
    b.addObserver(this);
  }

  //キーボード操作
  public void keyPressed(KeyEvent e){
    kc = e.getKeyCode();
    if(kc == e.VK_RIGHT){
      right = true;
    }else if(kc == e.VK_LEFT){
      left = true;
    }
  }

    public void keyReleased(KeyEvent e){
      kc = e.getKeyCode();
      if(kc == e.VK_RIGHT){
        right = false;
      }else if(kc == e.VK_LEFT){
        left = false;
      }
    }

    public void keyTyped(KeyEvent e){

    }


  public void run(){
    while(true){
      if(left){
        b.move(kc);
      }else if(right){
        b.move(kc);
      }
      try {Thread.sleep(20);}catch(Exception e){}
    }
  }

  //パネルチェンジメソッド
  public void pc(String str){
    p.PanelChange(this,str);
  }

  //スレッドスタートメソッド
  public void startThread(){
    t1.start();
  }




}
