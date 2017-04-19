# virtualenv

### install

```python
pip3 install virtualenv --proxy http://proxy.houston.hp.com:8080
```

### usage


```bash

virtualenv env --python=python3.exe

```


```bash

source env/bin/activate

```

```cmd

env/Scripts/activate

```

```bash

deactivate

```

# pip

```python
pip freeze > requirements.txt
```

```python
pip install -r requirements.txt --no-index --find-links file:///tmp/packages
```


# module

When a module named `spam` is imported, the interpreter first searches for a built-in module with that name. If not found, it then searches for a file named `spam.py` in a list of directories given by the variable `sys.path`. `sys.path` is initialized from these locations:
* The directory containing the input script (or the current directory when no file is specified).
* `PYTHONPATH` (a list of directory names, with the same syntax as the shell variable `PATH`).
* The installation-dependent default.

> On file systems which support symlinks, the directory containing the input script is calculated after the symlink is followed. In other words the directory containing the symlink is not added to the module search path.

After initialization, Python programs can modify sys.path. The directory containing the script being run is placed at the beginning of the search path, ahead of the standard library path. This means that scripts in that directory will be loaded instead of modules of the same name in the library directory.
