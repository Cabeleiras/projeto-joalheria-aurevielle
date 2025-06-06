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

import br.com.joalheriaaurevielle.app.entities.CategoriaProduto;
import br.com.joalheriaaurevielle.app.services.CategoriaProdutoService;

@RestController
@RequestMapping("/categoriaproduto")
public class CategoriaProdutoController {

    @Autowired
    private CategoriaProdutoService categoriaProdutoService;

    @PostMapping
    public CategoriaProduto createCategoriaProduto(@RequestBody CategoriaProduto categoriaProduto) {
        return categoriaProdutoService.saveCategoriaProduto(categoriaProduto);
    }

    @GetMapping
    public List<CategoriaProduto> getAllCategoriasProduto() {
        return categoriaProdutoService.getAllCategoriasProduto();
    }

    @GetMapping("/{id}")
    public CategoriaProduto getCategoriaProduto(@PathVariable Long id) {
        return categoriaProdutoService.getCategoriaProdutoById(id);
    }

    @PutMapping
    public CategoriaProduto editCategoriaProduto(@RequestBody CategoriaProduto categoriaProduto) {
        return categoriaProdutoService.saveCategoriaProduto(categoriaProduto);
    }

    @DeleteMapping("/{id}")
    public void deleteCategoriaProduto(@PathVariable Long id) {
        categoriaProdutoService.deleteCategoriaProduto(id);
    }
}