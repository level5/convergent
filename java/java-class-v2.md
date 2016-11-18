```java

package com.zizaitianyuan.javac2.lesson.example.javaclass;

public class Shape {

	public void describeMeAndParamShape(Shape shape){
		System.out.println("I'm Shape, Parameter is shape");
	}
	
	public void describeMeAndParamShape(Triangle triangle){
		System.out.println("I'm Shape, Parameter is triangle");
	}
	
	
	public static void main(String args[]) {
		Shape shape_shape = new Shape();
		
		Shape shape_shape2D = new Shape2D();
		Shape2D shape2D_shape2D = new Shape2D();

		
		Triangle triangle_triangle = new Triangle();
		Circle circle_circle = new Circle();
		
		shape_shape.describeMeAndParamShape(shape2D_shape2D);    // s  s
		shape_shape.describeMeAndParamShape(triangle_triangle);  // s  t
		shape_shape.describeMeAndParamShape(circle_circle);      // s  s
		
		
		shape_shape2D.describeMeAndParamShape(shape2D_shape2D);   // 2d  s
		shape_shape2D.describeMeAndParamShape(triangle_triangle); // s t
		shape_shape2D.describeMeAndParamShape(circle_circle);     // 2d s
		
		
		shape2D_shape2D.describeMeAndParamShape(shape2D_shape2D);  // 2d 2d
		shape2D_shape2D.describeMeAndParamShape(triangle_triangle); // s t
		shape2D_shape2D.describeMeAndParamShape(circle_circle); //  2d  2d
	}
}

class Shape2D extends Shape{

	public void describeMeAndParamShape(Shape shape){
		System.out.println("I'm Shape2D, Parameter is shape");
	}
	
	public void describeMeAndParamShape(Shape2D shape2D){
		System.out.println("I'm Shape2D, Parameter is shape2D");
	}
}

class Triangle extends Shape2D{

}

class Circle extends Shape2D{

}

```
