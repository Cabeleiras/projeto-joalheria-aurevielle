import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Contador V2',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: const Color.fromARGB(255, 255, 0, 0)),
      ),
      home: const MyHomePage(title: 'Contador V2'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  int step_ = 1;
  static const int _max = 10;

  void _resetCounter() {
  setState(() {
    _counter = 0;
  });
}

void _incrementCounter() {
  if (_counter + step_ > _max) {
    _showMaxAlert();
  } else {
    setState(() {
      _counter += step_;
    });
  }
}

  void _decrementCounter() {
    setState(() {
      _counter--;
    });
  }

  void _showMaxAlert() {
  showDialog(
    context: context,
    builder: (_) => AlertDialog(
      title: Text('Aviso'),
      content: Text('Valor máximo (10) atingido!'),
      actions: [
        TextButton(
          onPressed: () => Navigator.of(context).pop(),
          child: Text('OK'),
        ),
      ],
    ),
  );
}

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
        actions: [IconButton(
  icon: Icon(Icons.refresh),
  onPressed: _resetCounter,
  tooltip: 'Reset',
),],
      ),

      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text('Número de vezes que você contou:'),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
             ), Text(
           _counter % 2 == 0 ? 'Par' : 'Ímpar',
          style: TextStyle(fontWeight: FontWeight.bold),
          
), SizedBox(height: 8),
  DropdownButton<int>(
  value: step_,
  items: [1,2,5].map((val) => DropdownMenuItem(
    value: val,
    child: Text('Incremento: ($val)'),
  )).toList(),
  onChanged: (newVal) {
    setState(() { step_ = newVal!; });
  },
),


          ], 
       
        ), 
        
      ),
      floatingActionButton: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(
            onPressed: _decrementCounter,
            tooltip: 'Decrement',
            child: const Icon(Icons.remove),
          ),
          const SizedBox(width: 16),
          FloatingActionButton(
            onPressed: _incrementCounter,
            tooltip: 'Increment',
            child: const Icon(Icons.add),
          ), 
          IconButton(
        icon: Icon(Icons.refresh),
        onPressed: _resetCounter,
        tooltip: 'Reset',
        ),
        ], 
      ),
      
    );
  }
}