import javax.swing.JFrame;

class new{
  public static void main(String args[]){
    MyFrame frame = new MyFrame("タイトル");
    frame.setVisible(true);
  }
}

class MyFrame extends JFrame{
  MyFrame(String title){
    setTitle(title);
    setBounds(100, 100, 200, 160);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
  }
}
