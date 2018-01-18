import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.util.*;
import java.lang.System;


class StartPanel extends JPanel implements ActionListener{
  //スタートボタン、終了ボタン
  JButton btnA, btnB;
  //画像読み込み変数
  ImageIcon icon1,icon2;
  Panel p;
  String str;
    //コンストラクタ
    public StartPanel(Panel pn,String s){
      p = pn;
      str = s;
      //ラベル作成
      JLabel lb1;
      //画像読み込み
      icon1 = new ImageIcon("../img/game/start.png");
      icon2 = new ImageIcon("../img/game/exit.png");
      this.setName("sp");
      //画面サイズ設定
      setSize(500,800);
      //色を設定
      setBackground(new Color(178, 181, 185));
      //レイアウト
      setLayout(null);

      //文字ラベル追加
      lb1 = new JLabel("ブロック崩し");
      //文字のフォント設定
      lb1.setFont(new Font("MS ゴシック",Font.BOLD,40));
      //文字の位置設定
      lb1.setBounds(Screen.lb_X,Screen.lb_Y,Screen.lb_WIDTH,Screen.lb_HEIGHT);
      //パネルにラベル追加
      this.add(lb1);


      //ボタンA作成
      btnA = new JButton(icon1);
      //ボタンの位置設定
      btnA.setBounds(Screen.btnA_X,Screen.btnA_Y,Screen.btn_WIDTH,Screen.btn_HEIGHT);
      //ボタン背景透明化
      btnA.setContentAreaFilled(false);
      //ボタン枠線なし
      btnA.setBorderPainted(false);
      //ボタンアクションリスナー追加
      btnA.addActionListener(this);

      //ボタンB作成
      btnB = new JButton(icon2);
      //ボタンの位置設定
      btnB.setBounds(Screen.btnB_X,Screen.btnB_Y,Screen.btn_WIDTH,Screen.btn_HEIGHT);
      //ボタン背景透明化
      btnB.setContentAreaFilled(false);
      //ボタン枠線なし
      btnB.setBorderPainted(false);
      btnB.addActionListener(this);
      //パネルにボタン追加
      this.add(btnA);
      this.add(btnB);


    }

    public void actionPerformed(ActionEvent e){
      if(e.getSource()==btnA){
        pc(p.PanelNames[1]);
      }else if(e.getSource()==btnB){//ボタンクリックイベント
        p.dispose();//アプリケーションフレーム破棄
        System.exit(0);//終了
      }
    }


    public void pc(String str){
      p.PanelChange((JPanel)this,str);
    }

}
