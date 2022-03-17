package webprog;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;


import java.util.ArrayList;

@RestController
public class Controller {

    ArrayList<Kino> alleBilletter = new ArrayList<>();

    @PostMapping("/lagreBillett")
    public ArrayList<Kino> enBillett(Kino innKunde){
        alleBilletter.add(innKunde);
        return alleBilletter;
    }

    @GetMapping("/slett")
    public void slettAlle(){
        alleBilletter.clear();
    }
}