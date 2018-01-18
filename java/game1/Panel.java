import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.util.*;
import java.lang.System;


class Panel extends JFrame /*implements ActionListener*/{
  public String[] PanelNames = {"sp","s"};
  StartPanel sp = new StartPanel(this,PanelNames[0]);
  GamePanel s   = new GamePanel(this,PanelNames[1]);
    public Panel(){//パネル関数作成
      //タイトル
      setTitle("GAME");
      //画面大きさ設定
      setBounds(Screen.P_X, Screen.P_Y, Screen.P_WIDTH, Screen.P_HEIGHT);
      //安全に終了
      setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
      //パネル追加
      this.add(sp);
      this.add(s);
      //パネル表示
      sp.setVisible(true);
      s.setVisible(false);
      //可視化
      setVisible(true);
    }
    public void PanelChange(JPanel jp,String str){
      System.out.println(jp.getName());
      String name = jp.getName();
      if(name == PanelNames[0]){
        sp = (StartPanel)jp;
        sp.setVisible(false);
      }else if(name == PanelNames[1]){
        s = (GamePanel)jp;
        s.setVisible(false);
      }
      if(str == PanelNames[0]){
        sp.setVisible(true);
      }else if(str == PanelNames[1]){
        s.setVisible(true);
      }
    }
}
