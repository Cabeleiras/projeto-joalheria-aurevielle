package br.com.joalheriaaurevielle.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.joalheriaaurevielle.app.entities.Ornamentos;
import br.com.joalheriaaurevielle.app.services.OrnamentosService;

@RestController
@RequestMapping("/ornamentos")
public class OrnamentosController {

    @Autowired
    private OrnamentosService ornamentosService;

    @PostMapping
    public Ornamentos createOrnamentos(@RequestBody Ornamentos ornamentos) {
        return ornamentosService.saveOrnamentos(ornamentos);
    }

    @GetMapping
    public List<Ornamentos> getAllOrnamentos() {
        return ornamentosService.getAllOrnamentos();
    }

    @GetMapping("/{id}")
    public Ornamentos getOrnamentos(@PathVariable Long id) {
        return ornamentosService.getOrnamentosById(id);
    }

    @PutMapping
    public Ornamentos editOrnamentos(@RequestBody Ornamentos ornamentos) {
        return ornamentosService.saveOrnamentos(ornamentos);
    }

    @DeleteMapping("/{id}")
    public void deleteOrnamentos(@PathVariable Long id) {
        ornamentosService.deleteOrnamentos(id);
    }
}