import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.JFrame;
import javax.swing.JPanel;
import java.util.*;
import java.lang.System;

public class GamePanel extends JPanel implements ActionListener{
  JButton btn = new JButton("MainPanelに移動");
  Panel p;
  String str;
    public GamePanel(Panel pn,String s){
      p = pn;
      str = s;
      this.setName(s);
      this.setSize(500,800);
      //色を設定
      setBackground(new Color(0, 0, 0));
      this.setLayout(null);
      btn.setBounds(150,50,200,40);
      btn.addActionListener(this);

      this.add(btn);
    }

    public void actionPerformed(ActionEvent e){
        if(e.getSource()==btn){
          pc();
        }
    }

    public void pc(){
      p.PanelChange((JPanel)this,p.PanelNames[0]);
    }
}
